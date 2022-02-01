export const setPropsAsInitial = WrappedComponent => (
    props => <WrappedComponent {...props} 
                initialValues={props}
                enableReinitialize    
            />
);