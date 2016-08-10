import EliquidAddForm from "./eliquid-add-form";

const EliquidAddContainer = () => {
    const handleSubmit = () => {
        console.log("handleSubmit called, form values =", arguments);
        debugger;
    };
    return (
        <EliquidAddForm handleSubmit={handleSubmit}/>
    );
};

export default EliquidAddContainer;
