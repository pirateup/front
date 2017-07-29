export default
{
    // choiceMade (context, { prop, value, step })
    // {
    //     context.commit({
    //         type: 'updateWindowModel',
    //         prop,
    //         value
    //     });

    //     if (step !== context.state.step)
    //     {
    //         context.commit({
    //             type: 'updateStep',
    //             step
    //         });
    //     }
    // },
    setUserLocation (context, { value })
    {
        context.commit({
            type: 'setLocation',
            value,
        });
    },
};
