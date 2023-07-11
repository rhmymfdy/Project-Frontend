import SideBar from "../sideBar";

const AdminLayout = ({children}) => {
    return ( 
        <div>
            <SideBar>
                {children}
            </SideBar>
        </div>
     );
}
 
export default AdminLayout;