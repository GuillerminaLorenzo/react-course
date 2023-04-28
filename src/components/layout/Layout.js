import LayoutStyle from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={LayoutStyle.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
