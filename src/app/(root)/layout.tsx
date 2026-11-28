

import type { ReactNode } from 'react';
import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';

const RootLayoutPage = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Header />
        <Navbar />
            {children}
        </div>
    );
};

export default RootLayoutPage;