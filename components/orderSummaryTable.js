export default function OrderSummaryTable(props) {
    return (
        <div className="overflow-auto">
            <table className="rounded-md overflow-hidden">
                <thead>
                    <tr className="text-slate-600 text-left">
                        <th className="font-medium pb-2 pr-12 pl-6 print:pl-0">
                            Product Name
                        </th>
                        <th className="font-medium pb-2 pr-12">Total Dozens</th>
                        <th className="font-medium pb-2 pr-12">Total Items</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((product, index) => {
                        return (
                            <tr
                                key={product.product_id}
                                className={`text-default-900 text-md print:border-t ${
                                    index % 2 == 0
                                        ? "bg-pink-100 print:bg-none"
                                        : ""
                                }`}
                            >
                                <td className="py-2 pr-10 md:pr-12 pl-6 font-medium print:pl-0">
                                    {product.product_name}
                                </td>
                                <td className="pr-12 font-bold text-center print:text-start">
                                    <span className="rounded-xl bg-teal-100 px-3 w-fit print:mr-5 print:px-0">
                                        {product.total_dozens || "-"}
                                    </span>
                                    <span className="hidden rounded-xl px-5 py-3 border-slate-400 border float-right print:inline"></span>
                                </td>
                                <td className="pr-12 font-bold text-center print:text-start">
                                    <span className="rounded-xl bg-yellow-100 px-3 w-fit print:mr-5 print:px-0">
                                        {product.total_quantity || "-"}
                                    </span>
                                    <span className="hidden rounded-xl px-5 py-3 border-slate-400 border float-right print:inline"></span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
