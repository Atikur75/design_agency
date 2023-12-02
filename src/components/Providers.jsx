'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const Providers = ({ children }) => {
    return (
        <>
            {children}
            <ProgressBar
                height="4px"
                color="#269669"
                options={{ showSpinner: true }}
                shallowRouting
            />
        </>
    );
};

export default Providers;