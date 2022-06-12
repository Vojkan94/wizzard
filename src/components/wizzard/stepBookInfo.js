import React from 'react'

function StepBookInfo({ handleBookInfoChange, bookInfo }) {
  return (
    <div className="book-info-wrapper">
      <label className="info-label">
        Book title
        <input
          onChange={handleBookInfoChange}
          data-type="title"
          className="input-field"
          placeholder="Book title"
          value={bookInfo.title}
        />
      </label>
      <label className="info-label">
        Author
        <select
          data-type="author"
          value={bookInfo.author || '-'}
          onChange={handleBookInfoChange}
        >
          <option disabled value="-">
            Author
          </option>
          <option>Ivo</option>
        </select>
      </label>
      <label className="info-label">
        ISBN
        <input
          data-type="isbn"
          className="input-field"
          placeholder="ISBN"
          value={bookInfo.isbn}
          onChange={handleBookInfoChange}
        />
      </label>
      <label className="info-label">
        Publisher
        <select
          data-type="publisher"
          value={bookInfo.publisher || '-'}
          onChange={handleBookInfoChange}
        >
          <option disabled value="-">
            Publisher
          </option>
          <option>Vulkan</option>
        </select>
      </label>
      <label className="info-label">
        Date published
        <input
          data-type="date"
          style={{ textTransform: 'uppercase' }}
          className="input-field"
          type="date"
          value={bookInfo.date}
          onChange={handleBookInfoChange}
        />
      </label>
      <label className="info-label">
        Number of pages
        <input
          data-type="numberOfPages"
          type="number"
          className="input-field"
          placeholder="Number of pages"
          value={bookInfo.numberOfPages}
          onChange={handleBookInfoChange}
        />
      </label>
      <label className="info-label">
        Format
        <select
          data-type="format"
          value={bookInfo.format || '-'}
          onChange={handleBookInfoChange}
        >
          <option disabled value="-">
            Format
          </option>
          <option>A5</option>
        </select>
      </label>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label className="info-label" style={{ width: '48%' }}>
          Edition
          <input
            data-type="edition"
            className="input-field"
            placeholder="Edition"
            value={bookInfo.edition}
            onChange={handleBookInfoChange}
          />
        </label>
        <label className="info-label" style={{ width: '48%' }}>
          Edition language
          <select
            data-type="editionLanguage"
            value={bookInfo.editionLanguage || '-'}
            onChange={handleBookInfoChange}
          >
            <option disabled value="-">
              Edition language
            </option>
            <option>srpski</option>
          </select>
        </label>
      </div>
      <label className="info-label">
        Description
        <textarea
          value={bookInfo.desc}
          onChange={handleBookInfoChange}
          data-type="desc"
          rows="4"
          placeholder="Type the description..."
        />
      </label>
    </div>
  )
}

export default StepBookInfo
