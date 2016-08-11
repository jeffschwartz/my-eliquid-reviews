import EliquidAddForm from "./eliquid-add-form";

const EliquidAddContainer = () => {
    const handleSubmit = data => {
        console.log("handleSubmit called, data =", data);
    };
    return (
        <EliquidAddForm onSubmit={handleSubmit}/>
    );
};

export default EliquidAddContainer;
