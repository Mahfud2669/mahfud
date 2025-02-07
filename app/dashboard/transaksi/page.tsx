"use client";

import { useEffect, useState } from "react";

interface Transaksi {
  id: number;
  customer_name: string;
  item_id: string;
  quantity: number;
  total_price: number;
  created_at: string;
}

export default function TransaksiPage() {
  const [transaksi, setTransaksi] = useState<Transaksi[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTransaksi() {
      try {
        const response = await fetch("/api/transaksi");
        if (!response.ok) {
          throw new Error("Gagal mengambil data transaksi");
        }
        const data: Transaksi[] = await response.json();
        setTransaksi(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchTransaksi();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Data Transaksi</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">No</th>
              <th className="border border-gray-300 px-4 py-2">Nama Pelanggan</th>
              <th className="border border-gray-300 px-4 py-2">Item</th>
              <th className="border border-gray-300 px-4 py-2">Jumlah</th>
              <th className="border border-gray-300 px-4 py-2">Total Harga</th>
              <th className="border border-gray-300 px-4 py-2">Tanggal</th>
            </tr>
          </thead>
          <tbody>
            {transaksi.map((item, index) => (
              <tr key={item.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{item.customer_name}</td>
                <td className="border border-gray-300 px-4 py-2">{item.item_id}</td>
                <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>
                <td className="border border-gray-300 px-4 py-2">Rp {item.total_price.toLocaleString()}</td>
                <td className="border border-gray-300 px-4 py-2">{new Date(item.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
