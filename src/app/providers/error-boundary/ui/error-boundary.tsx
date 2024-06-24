import React, { ErrorInfo, ReactNode, Suspense } from 'react';

interface IProps {
    children: ReactNode;
}

interface IState {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        if (import.meta.env.DEV) {
            console.log(error, errorInfo, 'ERROR');
        }
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return (
                <Suspense fallback="">
                    <div>Something went wrong</div>
                </Suspense>
            );
        }

        return children;
    }
}
