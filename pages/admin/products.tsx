// core imports
import { NextPage } from "next";
import Image from "next/image";
import { useState, useEffect } from "react";

// Third Party Imports
import nookies, { parseCookies } from "nookies";
import { FaCheck, FaTimes, FaTrash } from "react-icons/fa";
import moment from "moment";
import { useRouter } from "next/router";

// Domestic Imports
import AdminLayout from "../../Components/Layout/AdminLayout";
import CONFIG from "../../CONFIG";

// interface item {
//   id: string;
//   title: string;
//   reduced_40: string;
//   location: string;
//   createdAt: string;
// }

// Image Overlay Component
const overlayBox = (image: string, setImage: Function) => {
  return (
    <div
      onClick={() => setImage("")}
      className="flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 bg-[#000000cd]  p-10 "
    >
      <img style={{ height: "90vh" }} src={image} />
    </div>
  );
};

interface pageProps {
  user: {
    username: string;
  };
  token: string;
  status: string;
}

// Page
const Products: NextPage<pageProps> = ({ user }) => {
  const cookies = parseCookies();
  const router = useRouter();
  const [image, setImage] = useState("");
  const [data, setData] = useState<any>();
  const [loading, setLoadingState] = useState(false);

  const loadData = () => {
    fetch(`${CONFIG.API_URL}/product/all`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.filter((item: any) => item.status !== "draft"));
        console.log(data);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  // console.log(jwt)
  const deleteProduct = (id: string, objectIndex: number) => {
    const consent = confirm("Are you sure?");

    if (consent == true) {
      fetch(`${CONFIG.API_URL}/product/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${cookies.jwt}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.affected > 0) {
            alert(`Deleted ${data.affected}`);
            router.reload();
          } else {
            alert("Try again later");
          }
        });
    }
  };

  return (
    <>
      <AdminLayout username={user.username} className="flex" isLoggedIn={true}>
        {image == "" ? "" : overlayBox(image, setImage)}
        <h1 className="text-3xl font-bold">Approved Products</h1>
        <p className="text-gray-400">
          All products that have been allowed on site
        </p>
        {data && data.length != 0 ? (
          <table className="w-full mt-10">
            <thead className="w-full font-bold text-right">
              <tr>
                <td className="border p-3">#</td>
                <td className="border p-3">Image</td>
                {/* <td className="border p-3">Seller</td>
                <td className="border p-3">Location</td> */}
                {/* <td className="border p-3">Submission Date</td> */}
                <td className="border p-3">Action</td>
              </tr>
            </thead>
            <tbody className="w-full text-right">
              {data.map((item: any, index: number) => {
                return (
                  <tr key={item.id}>
                    <td className="border p-2">{index + 1}</td>
                    <td className="border p-2 flex gap-3 justify-between">
                      <>
                        <img
                          onClick={() =>
                            setImage(
                              `${CONFIG.API_URL}/product/image/${item.reduced_40}`
                            )
                          }
                          className="cursor-pointer"
                          width={200}
                          src={`${CONFIG.API_URL}/product/image/${item.reduced_40}`}
                        />
                        {console.log(
                          `${CONFIG.API_URL}/product/image/${item.reduced_40}`
                        )}
                        <div className="flex flex-col justify-between">
                          <h2 className="text-sm">
                            {item.title} -
                            <span className="text-gray-400"> By Imtiazkun</span>
                          </h2>
                          <div className="text-sm">
                            <p>{item.location}</p>
                            <p>
                              <small>
                                Submitted{" "}
                                {moment(item.createdAt, "YYYYMMDD").fromNow()}
                              </small>
                            </p>
                          </div>
                        </div>
                      </>
                    </td>
                    {/* <td className="border p-2">Seller</td>
                <td className="border p-2">Location</td> */}
                    {/* <td className="border p-2">Submission Date</td> */}
                    <td className="border p-2">
                      <div className="flex justify-end h-full">
                        <button
                          onClick={() => deleteProduct(item.id, index)}
                          className="bg-red-500 p-4 hover:bg-black text-white"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p className="mt-10 p-10 bg-gray-200 rounded-md font-bold text-gray-500 opacity-60">
            No products approved yet
          </p>
        )}
      </AdminLayout>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const cookies = nookies.get(context);
  const response = await fetch(`${CONFIG.API_URL}/auth/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${cookies.jwt}`,
    },
  });

  const data = await response.json();

  if (data.statusCode >= 400) {
    return {
      redirect: {
        permanent: false,
        destination: "/auth/login",
      },
    };
  } else {
    if (data.role == "user") {
      return {
        redirect: {
          permanent: false,
          destination: "/auth/login",
        },
      };
    } else {
      return {
        props: {
          loggedIn: true,
          user: data,
          token: cookies.jwt,
        },
      };
    }
  }
}
export default Products;
