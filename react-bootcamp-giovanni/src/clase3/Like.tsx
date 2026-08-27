import { useState } from "react"
import '../App.css'

function Like() {
  const [like, setLike] = useState(false)

  return (
      <section>
        <button
          type="button"
          className={like ? "liked" : "disliked"}
          onClick={() => setLike((like) => !like)
          }
          >
            <i className="fa-solid fa-thumbs-up"></i>
            {like ? "Like" : "Dislike"}
        </button>
      </section>
      )
}

export default Like