import { MenuOutlined } from "@ant-design/icons"
import { Button, Drawer } from "antd"
import { useState } from "react";
import Navbar from "./Navbar";

const NavDrawerBtn = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const showDrawer = () => {
        setIsDrawerOpen(true);
    }

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    }

    return (
        <>
            <Button
                icon={<MenuOutlined />}
                onClick={showDrawer}
                className="nav__drawer-btn"
            />

            <Drawer
                placement="left"
                closable={true}
                open={isDrawerOpen}
                onClose={closeDrawer}
            >
                <Navbar
                    showMenuBtn={false}
                    anchorDirection="vertical"
                    className="drawer__nav"
                    onClickAnchor={closeDrawer}
                />
            </Drawer>
        </>
    )
}

export default NavDrawerBtn