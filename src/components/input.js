export default function InputArea ({title, content, setcontent}){
    return(
        <>
            <label>
                {title}
                <input
                type="text"
                value={content}
                onChange={(e) => setcontent(e.target.value)}
                required
                />
            </label>
            <br/>
          </>
    )
}