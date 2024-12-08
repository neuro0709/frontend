export default function RegisterInput ({title, content, setContent}){
    return(
        <>
        <tbody>
            <tr>
                <td>{title}</td>
                <td>
                    <label>
                        <input
                        type="text"
                        key={title}
                        name={content}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        />
                    </label>
                </td>
            </tr>
        </tbody>

        </>
    )
}