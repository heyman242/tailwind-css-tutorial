import React from 'react'

const day2 = () => {
  return (
    <div>
      day2
      <>
        <div className="table w-full">
          <div className="table-header-group">
            <div className="table-row">
              <div className="table-cell text-left">Song</div>
              <div className="table-cell text-left">Artist</div>
              <div className="table-cell text-left">Year</div>
            </div>
          </div>
          <div className="table-row-group">
            <div className="table-row">
              <div className="table-cell ...">
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </div>
              <div className="table-cell ...">Malcolm Lockyer</div>
              <div className="table-cell ...">1961</div>
            </div>
            <div className="table-row">
              <div className="table-cell ...">
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </div>
              <div className="table-cell ...">Malcolm Lockyer</div>
              <div className="table-cell ...">1961</div>
            </div>
            <div className="table-row">
              <div className="table-cell ...">
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </div>
              <div className="table-cell ...">Malcolm Lockyer</div>
              <div className="table-cell ...">1961</div>
            </div>
          </div>
        </div>
      </>
      <>
        <table>
          <thead>
            <tr>
              <th>Invoice #</th>
              <th>Client</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#100</td>
              <td>Pendant Publishing</td>
              <td>$2,000.00</td>
            </tr>
            <tr className="collapse">
              <td>#101</td>
              <td>Kruger Industrial Smoothing</td>
              <td>$545.00</td>
            </tr>
            <tr>
              <td>#102</td>
              <td>J. Peterman</td>
              <td>$10,000.25</td>
            </tr>
          </tbody>
        </table>
      </>
      <>
        <div className="flex flex-row">
          <button className="border px-3 rounded-full bg-orange-500">1</button>
          <button className="border px-3 rounded-full bg-red-500">2</button>
          <button className="border px-3 rounded-full bg-sky-500">3</button>
        </div>
        <br />
        <div className="flex flex-row-reverse">
          <button className="border px-3 rounded-full bg-orange-500">1</button>
          <button className="border px-3 rounded-full bg-red-500">2</button>
          <button className="border px-3 rounded-full bg-sky-500">3</button>
        </div>
        <br />
        <div className="flex flex-col">
          <button className="border px-3 rounded-full bg-orange-500">1</button>
          <button className="border px-3 rounded-full bg-red-500">2</button>
          <button className="border px-3 rounded-full bg-sky-500">3</button>
        </div>
        <br />
        <div className="flex flex-col-reverse">
          <button className="border px-3 rounded-full bg-orange-500">1</button>
          <button className="border px-3 rounded-full bg-red-500">2</button>
          <button className="border px-3 rounded-full bg-sky-500">3</button>
        </div>
      </>
    </div>
  );
}

export default day2