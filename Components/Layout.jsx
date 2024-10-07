import { useState } from 'react';
import Header from './Common/Header/Header';
import Sidebar from './Common/Header/Sidebar';

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Header onToggleSidebar={toggleSidebar} isChecked={isSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <main>{children}</main>
    </>
  );
}