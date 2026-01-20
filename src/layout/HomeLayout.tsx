import Footer from "@/element/Footer";
import Navbar from "@/element/Navbar";
import type { ReactNode } from "react";


interface IProps {
     children: ReactNode;
}


const HomeLayout = ({ children }: IProps) => {
     return (
     <div className=" min-h-screen flex flex-col">
          <Navbar />
               <div className="grow-1">{children}</div>
          <Footer />
     </div>
     );
}

export default HomeLayout;