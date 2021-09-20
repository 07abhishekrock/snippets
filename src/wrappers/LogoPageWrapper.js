import CustomSVGIcon from "../util_components/CustomSVGIcon"
import logo from '../images/logo512.svg';
import '../styles/_page_wrapper.scss';

const LogoPageWrapper = ({children})=>{
    return (
        <div className="logo-page-wrapper">
            <div className="logo-section">
                <CustomSVGIcon svg={logo}/>
                <h2>Code Snippets</h2>
                <h4>Manage Bits of Code with ease.</h4>
            </div>
            <div className="page-section">
                <div className="page-section-inner">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default LogoPageWrapper;