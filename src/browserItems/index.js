import './index.css'

const BrowserItems = props => {
  const {browserItems, deletedItemList} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = browserItems

  const onDeletedItem = () => {
    deletedItemList(id)
  }

  return (
    <li className="list">
      <div className="container">
        <div className="row">
          <p>{timeAccessed}</p>
          <div className="row">
            <img src={logoUrl} alt="domain logo" className="image" />

            <p className="styling">{title}</p>
            <p className="styling">{domainUrl}</p>
          </div>
        </div>

        <div>
          <button
            type="button"
            onClick={onDeletedItem}
            className="button"
            value={id}
            // eslint-disable-next-line react/no-unknown-property
            testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="image1"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default BrowserItems
