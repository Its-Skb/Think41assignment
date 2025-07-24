import React, { useState } from 'react';
import './App.css';
import EventForm from './components/EventForm';
import InstanceList from './components/InstanceList';
import { addWeeks, parseISO, getDay } from 'date-fns';

const daysOfWeek = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

function App() {
  const [instances, setInstances] = useState([]);
  const [viewWindow, setViewWindow] = useState({ start: '', end: '' });

  const handleGenerate = ({
    startDate,
    eventTime,
    recurrence,
    dayOfWeek,
    occurrences,
    viewStart,
    viewEnd,
  }) => {
    if (!startDate || !occurrences || !viewStart || !viewEnd || !eventTime) {
      setInstances([]);
      setViewWindow({ start: '', end: '' });
      return;
    }
    setViewWindow({ start: viewStart, end: viewEnd });

    const results = [];
    let current = parseISO(startDate);
    let count = 0;

    if (recurrence === 'Daily') {
      while (count < occurrences) {
        const instanceDate = new Date(current);
        const [hours, minutes] = eventTime.split(':');
        instanceDate.setHours(Number(hours), Number(minutes), 0, 0);
        results.push(instanceDate);
        current.setDate(current.getDate() + 1);
        count++;
      }
    } else {
      const weekday = daysOfWeek[dayOfWeek];
      while (getDay(current) !== weekday) {
        current.setDate(current.getDate() + 1);
      }
      while (count < occurrences) {
        const instanceDate = new Date(current);
        const [hours, minutes] = eventTime.split(':');
        instanceDate.setHours(Number(hours), Number(minutes), 0, 0);
        results.push(instanceDate);
        current = addWeeks(current, 1);
        count++;
      }
    }
    setInstances(results);
  };

  return (
    <div className="main-container">
      <h2>Recurring Event Instance Generator</h2>
      <EventForm onGenerate={handleGenerate} />
      <InstanceList instances={instances} viewWindow={viewWindow} />
    </div>
  );
}

export default App;
