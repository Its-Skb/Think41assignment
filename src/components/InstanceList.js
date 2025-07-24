import React from 'react';
import { parseISO, isWithinInterval, format } from 'date-fns';

function InstanceList({ instances, viewWindow }) {
  if (!instances.length) {
    return <div>No instances generated yet.</div>;
  }

  const viewStart = viewWindow.start ? parseISO(viewWindow.start) : null;
  const viewEnd = viewWindow.end ? parseISO(viewWindow.end) : null;

  return (
    <ul>
      {instances.map((dateObj, idx) => {
        let inView = false;
        if (viewStart && viewEnd) {
          inView = isWithinInterval(dateObj, { start: viewStart, end: viewEnd });
        }
        return (
          <li
            key={idx}
            style={{
              color: inView ? 'black' : 'gray',
              fontWeight: inView ? 'bold' : 'normal',
            }}
          >
            {format(dateObj, 'yyyy-MM-dd HH:mm')}
            {!inView && ' (out of view window)'}
          </li>
        );
      })}
    </ul>
  );
}

export default InstanceList;
