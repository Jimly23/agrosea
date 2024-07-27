import React from 'react'
import TransactionItem from '../organisms/TransactionItem'
import { FaDownload } from 'react-icons/fa'

const TransactionStore = () => {
  return (
    <div className='border shadow-sm rounded-lg bg-white min-w-[900px]'>
      <div className="header p-3 flex items-center justify-between">
        <h5 className='text-lg font-medium'>Transaksi</h5>
        <button className='flex items-center gap-x-2 border text-[14px] rounded-md shadow-sm outline-none px-3 py-2 border-aksen bg-blue-100 text-aksen'>
          <FaDownload />
          <p>Eksport Transaksi</p>
        </button>
      </div>

      {/* filter box */}
      <div className="filter-box font-medium text-[14px] mb-5 p-3 grid grid-cols-5 gap-3">
        <input type="text" placeholder='Filter By Trx ID' className='border rounded-md shadow-sm outline-none px-4 py-2 w-full' />
        <input type="text" placeholder='Filter By Nama Produk' className='border rounded-md shadow-sm outline-none px-4 py-2 w-full' />
        <input type="text" placeholder='Filter By Status' className='border rounded-md shadow-sm outline-none px-4 py-2 w-full' />
        <input type="text" placeholder='Filter By Tanggal' className='border rounded-md shadow-sm outline-none px-4 py-2 w-full' />
        <button className='border rounded-md shadow-sm outline-none px-4 py-2 w-full bg-aksen text-white'>Cari</button>
      </div>

      <main>
        <div className="column-name grid grid-cols-6 font-medium p-5 bg-slate-200 gap-2">
          <h6>Trx ID</h6>
          <h6>Produk</h6>
          <h6>SN</h6>
          <h6>Harga</h6>
          <h6>Status</h6>
          <h6>Tanggal</h6>
        </div>

        <div className="transaction-list">
          <TransactionItem idTrx={'TRX0023532'} productName={'Cumi-cumi'} price={63000} status={'Sukses'} />
          <TransactionItem idTrx={'TRX0023533'} productName={'Jaring ikan'} price={119000} status={'Sukses'} />
          <TransactionItem idTrx={'TRX0023534'} productName={'Ikan Bandeng'} price={26500} status={'Sukses'} />
          <TransactionItem idTrx={'TRX0023535'} productName={'Lobster'} price={122000} status={'Pending'} />
          <TransactionItem idTrx={'TRX0023536'} productName={'Tuna'} price={43000} status={'Sukses'} />
          <TransactionItem idTrx={'TRX0023537'} productName={'Kepiting'} price={195000} status={'Sukses'} />
        </div>
      </main>
    </div>
  )
}

export default TransactionStore