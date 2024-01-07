import NavigationBar from "@/components/modules/NavigationBar";
import React, { Children } from "react";

type Props = {};

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <NavigationBar/>
            <div>{children}</div>
        </div>
    );
}
