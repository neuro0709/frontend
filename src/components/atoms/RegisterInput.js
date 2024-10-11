export default function RegisterInput ({title, content, setcontent}){
    return(
        <>
        <tbody>
            <tr>
                <td>{title}</td>
                <td>
                    <label>
                        <input
                        type="text"
                        key={content}
                        name={content}
                        value={content}
                        onChange={(e) => setcontent(e.target.value)}
                        required
                        />
                    </label>
                </td>
            </tr>
        </tbody>

        </>
    )
}