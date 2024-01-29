// import React from 'react';
// import { ComponentType } from 'react';
// import { ICalendarProps } from '@components/Calendar/types';

// interface WithMinMaxProps extends Pick<ICalendarProps, 'minDate', 'maxDate'> {}

// const withMinMax = <T extends WithMinMaxProps>(WrappedComponent: ComponentType<T>) => {
//     const ComponentWithMinMax = (props: Omit<T, keyof WithMinMaxProps>) => {
//         return <WrappedComponent {...(props as T)} isWithMinMax={true} />;
//     };

//     const displayName = WrappedComponent.displayName || WrappedComponent.name;
//     ComponentWithMinMax.displayName = `withMinMax(${displayName})`;

//     return ComponentWithMinMax;
// };

// export default withMinMax;
