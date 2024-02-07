import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from "@ant-design/icons";
import { FaBlog, FaBlogger, FaClipboardList } from "react-icons/fa";
import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi2";
import { TbCategory2 } from "react-icons/tb";
import { MdOutlineCategory } from "react-icons/md";
import { BiSolidColor } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa6";

import { Layout, Menu, Button, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { IoIosColorPalette } from "react-icons/io";
const { Header, Sider, Content } = Layout;
const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  const navigate = useNavigate()

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="py-3 justify-center flex items-center bg-tertiary">
            <h4 className="text-xl text-gray-700 font-semibold text-center ant logo-big">Shopifity Admin</h4>
            <h4 className="text-xl text-gray-700 font-semibold text-center ant logo-small">SA</h4>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={({key})=> {
                navigate(key)
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard size={25} />,
              label: "Dashboard",
            },
            {
              key: "catalog",
              icon: <AiOutlineDashboard size={25} />,
              label: "Catalog",
                children:[
                    {
                        key: "product",
                        icon: <AiOutlineShoppingCart size={25} />,
                        label: "Add Product"
                    },
                    {
                        key: "product-list",
                        icon: <AiOutlineShoppingCart size={25} />,
                        label: "Product List"
                    },
                    {
                        key: "category",
                        icon: <TbCategory2 size={25} />,
                        label: "Category"
                    },
                    {
                        key: "category-list",
                        icon: <MdOutlineCategory size={25} />,
                        label: "Category List"
                    },
                    {
                        key: "color",
                        icon: <IoIosColorPalette  size={25} />,
                        label: "Color"
                    },
                    {
                        key: "color-list",
                        icon: <BiSolidColor size={25} />,
                        label: "Color List"
                    },
                    {
                        key: "size",
                        icon: <TbCategory2 size={25} />,
                        label: "Size"
                    },
                    {
                        key: "size-list",
                        icon: <MdOutlineCategory size={25} />,
                        label: "Size List"
                    },
                ]
            },
            
            {
                key: "customers",
                icon: <HiOutlineUsers size={25} />,
                label: "Customers",
              },
              
            {
                key: "orders",
                icon: <FaClipboardList size={25} />,
                label: "Orders",
              },
              {
                  key: "blog",
                  icon: <FaBlogger size={25} />,
                  lable: "Blogs",
                  children: [
                    {
                        key: "",
                        icon: <FaBlog size={25} />,
                        label: "Blogs",
                      },
                    {
                        key: "create-blog",
                        icon: <FaBlog size={25} />,
                        label: "Add Blog",
                      }
                ]
              }
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center"
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        <div className="flex justify-center items-center space-x-2 mr-6">
            <img src={require("../../assets/images/profile.jpeg")} className="h-8 w-8 rounded-full" />
            <div className="relative">
            <span className="h-2 w-2 bg-tertiary rounded-full absolute -top-1 right-0" />
            <FaRegBell size={24} />
            </div>
            <div>
                <h4 className="text-sm font-bold text-black">Adediji Abdulquadri</h4>
                <h4 className="text-xs font-medium text-gray-400">adedijiabdulquadri@gmail.com</h4>
            </div>
        </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
            <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
