import React from 'react';
import { SideMessageList } from './shared/side-message-list/side-message-list';
import { TopMenu } from './shared/top-menu/top-menu'

export function Index() {
    return <div style={{ display: 'flex' }}>
        <TopMenu />
        {/* <SideMessageList /> */}
    </div>;
}
