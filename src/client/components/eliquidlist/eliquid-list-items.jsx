const shortenTo = (text, len, elipsis) => {
    if (text.length <= len) {
        return text;
    }
    text = text.slice(0, elipsis ? len - 3 : len);
    text = elipsis ? text + "..." : text;
    return text;
};

const EliquidListItems = ({eLiquids, handleListItemClick}) => {
    let rows = eLiquids.map((item, i) =>
        <tr
            id={item._id}
            className="list__item"
            onClick={() => handleListItemClick(item._id)}
            key={i}
        >
            <td className="list__item-detail">{item.name}</td>
            <td className="list__item-detail">{item.company}</td>
            <td className="list__item-detail">{item.category}</td>
            <td className="list__item-detail">{item.vgpg}</td>
            <td className="list__item-detail">{item.nic}</td>
            <td className="list__item-detail">{item.rating}</td>
            <td className="list__item-detail">{shortenTo(item.review, 25, true)}</td>
        </tr>);
    return (
        <table className="list__items-container">
            <thead>
                <tr>
                    <th className="list__items-header list__items-header--green">Name</th>
                    <th className="list__items-header list__items-header--green">Company</th>
                    <th className="list__items-header list__items-header--green">Category</th>
                    <th className="list__items-header list__items-header--green">VG/PG</th>
                    <th className="list__items-header list__items-header--green">Nic</th>
                    <th className="list__items-header list__items-header--green">Rating</th>
                    <th className="list__items-header list__items-header--green">Review</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
};

export default EliquidListItems;
