import type { ReactNode } from "react";


interface IProps {
     children: ReactNode;
}


const HomeLayout = ({ children }: IProps) => {
     return (
          <div>{children}</div>
     );
}

export default HomeLayout;