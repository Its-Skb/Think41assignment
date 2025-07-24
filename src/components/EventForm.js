import React, { useState } from 'react';

function EventForm({ onGenerate }) {
  const initialState = {
    startDate: '',
    eventTime: '09:00',
    recurrence: 'Weekly',
    dayOfWeek: 'Monday',
    occurrences: 1,
    viewStart: '',
    viewEnd: '',
    formError: ''
  };

  const [startDate, setStartDate] = useState(initialState.startDate);
  const [eventTime, setEventTime] = useState(initialState.eventTime);
  const [recurrence, setRecurrence] = useState(initialState.recurrence);
  const [dayOfWeek, setDayOfWeek] = useState(initialState.dayOfWeek);
  const [occurrences, setOccurrences] = useState(initialState.occurrences);
  const [viewStart, setViewStart] = useState(initialState.viewStart);
  const [viewEnd, setViewEnd] = useState(initialState.viewEnd);
  const [formError, setFormError] = useState(initialState.formError);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic as before...
    if (!startDate || !eventTime || !occurrences || !viewStart || !viewEnd) {
      setFormError('All fields are required.');
      return;
    }
    if (new Date(viewStart) > new Date(viewEnd)) {
      setFormError('View window start must be before end.');
      return;
    }
    if (startDate && viewEnd && new Date(startDate) > new Date(viewEnd)) {
      setFormError('Event start date must be before or equal to view window end.');
      return;
    }
    if (!occurrences || occurrences < 1) {
      setFormError('Number of occurrences must be at least 1.');
      return;
    }

    setFormError('');
    onGenerate({
      startDate,
      eventTime,
      recurrence,
      dayOfWeek,
      occurrences,
      viewStart,
      viewEnd,
    });
  };

  // Reset handler
  const handleReset = () => {
    setStartDate(initialState.startDate);
    setEventTime(initialState.eventTime);
    setRecurrence(initialState.recurrence);
    setDayOfWeek(initialState.dayOfWeek);
    setOccurrences(initialState.occurrences);
    setViewStart(initialState.viewStart);
    setViewEnd(initialState.viewEnd);
    setFormError(initialState.formError);
  };

  return (
    <form onSubmit={handleSubmit}>
      {formError && (
        <div style={{ color: 'red', marginBottom: '10px' }}>{formError}</div>
      )}
      <div>
        <label>Event Start Date:
          <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>Event Time:
          <input type="time" value={eventTime} onChange={e => setEventTime(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>Recurrence:
          <select value={recurrence} onChange={e => setRecurrence(e.target.value)}>
            <option value="Weekly">Weekly</option>
            <option value="Daily">Daily</option>
          </select>
        </label>
      </div>
      {recurrence === 'Weekly' && (
        <div>
          <label>Day of Week:
            <select value={dayOfWeek} onChange={e => setDayOfWeek(e.target.value)}>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
              <option>Sunday</option>
            </select>
          </label>
        </div>
      )}
      <div>
        <label>Number of Occurrences:
          <input
            type="number"
            value={occurrences}
            min="1"
            onChange={e => setOccurrences(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>View Window Start:
          <input
            type="date"
            value={viewStart}
            onChange={e => setViewStart(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>View Window End:
          <input
            type="date"
            value={viewEnd}
            onChange={e => setViewEnd(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Generate Instances</button>
      <button type="button" style={{ marginLeft: 8 }} onClick={handleReset}>Reset</button>
    </form>
  );
}

export default EventForm;



