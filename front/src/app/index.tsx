import React from 'react';
import { LayoutMessage } from './shared/layout-message/layout-message';
import { TopMenu } from './shared/top-menu/top-menu'

export function Index() {
    return <div >
        <TopMenu />
        <LayoutMessage />
    </div>;
}
