const EliquidListItems = ({eLiquids, handleListItemClick}) => {
    let rows = eLiquids.map((item, i) =>
        <tr
            id={item.id}
            className="list__item"
            onClick={() => handleListItemClick(item.id)}
            key={i}
        >
            <td className="list__item-detail">{item.name}</td>
            <td className="list__item-detail">{item.company}</td>
            <td className="list__item-detail">{item.category}</td>
            <td className="list__item-detail">{item.rating}</td>
            <td className="list__item-detail">{item.vgpg}</td>
            <td className="list__item-detail">{item.nic}</td>
        </tr>);
    return (
        <table className="list__items-container">
            <thead>
                <tr>
                    <th className="list__items-header list__items-header--green">Name</th>
                    <th className="list__items-header list__items-header--green">Company</th>
                    <th className="list__items-header list__items-header--green">Category</th>
                    <th className="list__items-header list__items-header--green">Rating</th>
                    <th className="list__items-header list__items-header--green">VG/PG</th>
                    <th className="list__items-header list__items-header--green">Nic</th></tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
};

export default EliquidListItems;
