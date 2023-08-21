// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveThumbnailId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const thumbnail = isActive ? `thumbnail active` : `thumbnail`

  const onClickThumbnail = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className="list-item">
      <button className="button" type="button" onClick={onClickThumbnail}>
        <img src={thumbnailUrl} alt={thumbnailAltText} className={thumbnail} />
      </button>
    </li>
  )
}

export default ThumbnailItem
