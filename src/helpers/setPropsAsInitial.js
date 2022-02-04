/*
 * SET PROPS AS INITIAL
 * WRAPPED COMPONENT 
 */
export const setPropsAsInitial = WrappedComponent => (
    props => <WrappedComponent {...props} 
                initialValues={props}
                enableReinitialize    
            />
);