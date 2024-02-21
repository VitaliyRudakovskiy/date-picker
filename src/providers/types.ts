import { Dispatch, ReactNode, SetStateAction } from 'react';

import { IRange } from '@/types';

export interface IProviderProps {
    children: ReactNode;
}

export interface IRangeContext {
    range: IRange | undefined;
    setRange: Dispatch<SetStateAction<IRange | undefined>>;
}
