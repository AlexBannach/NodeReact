import React from "react";
import { Box } from "@chakra-ui/react";
import { LogoSearch } from "../LogoSearch/LogoSearch";
import { Navigation } from "../Navigation/Navigation";

export function SideBar({ collapse }) {
    return (
        <React.Fragment>
            <Box>
                <LogoSearch collapse={collapse} />
                {/*  <SwitchButtons collapse={collapse} />*/}
                <Navigation collapse={collapse} />
            </Box>
            {/* AVATAR BOX */}
        </React.Fragment>
    );
};


