import React from 'react';
import { Tooltip } from '@mui/material';
import {useTheme} from '@mui/material/styles';

export function MythicStyledTooltip(props){
    const { children, title, style, ...other} = props;
    const theme = useTheme();
    return (
        <Tooltip title={title} arrow followCursor enterDelay={750} componentsProps={{
            tooltip: {
                sx: {
                    backgroundColor: theme.palette.background.contrast,
                    color: theme.palette.text.contrast,
                    boxShadow: theme.shadows[1],
                    fontSize: 13,
                    '& .MuiTooltip-arrow': {
                        color: theme.palette.background.contrast
                    },
                    zIndex: 1000
                }
            }
        }} style={{zIndex:1000}} {...other}>
            {<span style={{display: "inline-block", ...style}}>{children}</span>}
        </Tooltip>
    );
}