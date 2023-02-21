import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { LayoutMessage } from './shared/layout-message/layout-message';
import { TopMenu } from './shared/top-menu/top-menu'

export function Index() {
    // State
    const [minWidth, setMinWidth] = useState(350);

    // Comportement
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < minWidth) {
            window.innerWidth = minWidth;
          }
        };
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, [minWidth]);

    // Rendu
    return <Box sx={{ display: 'flex'}}>
        <TopMenu />
        <LayoutMessage />
    </Box>;
}
