import Head from 'next/head';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header } from '../components/Header';
import Pagination from '../components/Pagination';
import api from '../services/api';
import styles from '../styles/Home.module.css';

type Data = {
  id: number;
  slot: number;
  port: number;
  ont_id: number;
  state: string;
  sn: string;
  olt: string;
};

export default function Home() {
  const [isUpData, setIsUpData] = useState(false);

  const [data, setData] = useState<Data[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  const itensPerPage = 10;
  const pages = Math.ceil(data.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = data.slice(startIndex, endIndex);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/getData');

      setData(response.data as Data[]);
    };
    fetchData();
  }, [currentPage]);

  async function handleUpFiles() {
    await api.get('/uploadData').then((res) => {
      if (res.status == 200) {
        setIsUpData(true);
        toast.info('Dados upados');
        setCurrentPage(0);
      } else if (res.status == 202) {
        toast.warn('Os dados já estão no Banco de Dados!');
        setIsUpData(true);
      } else {
        toast.error('Erro interno do servidor!');
      }
    });
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div>
        <Head>
          <title>Home - Desafio Virtex</title>
        </Head>
        <Header />
      </div>
      <div className={styles.container}>
        <section>
          <h2>Subir dados para Banco de Dados</h2>

          <button
            type="button"
            style={{ background: `${!isUpData ? 'var(--green)' : ''}` }}
            onClick={handleUpFiles}
            disabled={isUpData}
          >
            Upar dados
          </button>
        </section>

        <section>
          <h2>Todas SNs</h2>

          <table cellSpacing={0} className={styles.table}>
            <thead>
              <tr>
                <th></th>
                <th>Slot</th>
                <th>Port</th>
                <th>Ont_id</th>
                <th>Sn</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {currentItens?.map((info) => (
                <tr key={info.id}>
                  <td>
                    {info.olt == 'Huawei' ? (
                      <img src="./huawei.png" alt="huawei" />
                    ) : (
                      <img src="./zte.png" alt="huawei" />
                    )}
                  </td>
                  <td>{info.slot}</td>
                  <td>{info.port}</td>
                  <td>{info.ont_id}</td>
                  <td>{info.sn}</td>
                  <td
                    style={{
                      color: `${
                        info.state == 'online' || info.state == 'working'
                          ? 'var(--green)'
                          : 'var(--red)'
                      }`,
                    }}
                  >
                    {info.state}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <Pagination pages={pages} setCurrentPage={setCurrentPage} />
      </div>
    </>
  );
}
