import React, { createContext, useContext, useState } from 'react';
import { IProviderProps, IRange, IRangeContext } from './types';

const RangeContext = createContext<IRangeContext>({
    range: undefined,
    setRange: () => undefined,
});

export const useRange = () => {
    return useContext(RangeContext);
};

const RangeProvider = ({ children }: IProviderProps) => {
    const [range, setRange] = useState<IRange | undefined>({
        rangeStart: undefined,
        rangeEnd: undefined,
    });

    const rangeContextValue = {
        range,
        setRange,
    };

    return <RangeContext.Provider value={rangeContextValue}>{children}</RangeContext.Provider>;
};

export default RangeProvider;
