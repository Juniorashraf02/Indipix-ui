// NextJS & React imports
import Link from 'next/link';

// Third Party imports

// Domestic imports


// interface
interface checkboxProps{
    label: string;
    linkOne?: string;
    and?: string;
}
const PrivacyCheckbox: React.FC<checkboxProps> = (props) => {
    return (
        <div>
            <div className="flex items-center">
                  <input id="signup-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300" />
                  <label htmlFor="signup-checkbox" className="ml-2 text-sm font-medium text-gray-900">{props.label} <Link href="/help/privacy-policy">
                    <a className="text-red-500">{props.linekOne}</a>
                  </Link> {props.and} <Link href="/help/terms-condition">
                      <a className="text-red-500">Terms &amp; Conditions</a>
                    </Link></label>
                </div>
        </div>
    );
};

export default PrivacyCheckbox;