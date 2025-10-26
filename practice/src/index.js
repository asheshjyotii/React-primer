import { components } from 'daisyui/imports';
import reactDom from 'react-dom/client'
import HeaderComponent from './components/HeaderComponent'
import BodyComponent from './components/BodyComponent'

const AppLayout = () => {

    return (
        <div>
            <HeaderComponent/>
            <BodyComponent/>
        </div>
    );
}


let root = reactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)