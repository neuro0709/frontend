export default function InputArea ({title, content, setcontent}){
    return(
        <>
        <tr>
            <td>{title}</td>
            <td>
                <label>
                    <input
                    type="text"
                    value={content}
                    onChange={(e) => setcontent(e.target.value)}
                    required
                    />
                </label>
            </td>
        </tr>

          </>
    )
}