import EliquidAddForm from "./eliquid-add-form";

const EliquidAddContainer = () => {
    const handleSubmit = data => {
        alert("handleSubmit called, data = " + JSON.stringify(data));
    };
    return (
        <EliquidAddForm onSubmit={handleSubmit}/>
    );
};

export default EliquidAddContainer;
