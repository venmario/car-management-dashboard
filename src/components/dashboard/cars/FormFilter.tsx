import { useState } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  FormLabel,
  FormSelect,
  Row,
} from "react-bootstrap";
import iuser from "../../../assets/icons/icon_user.svg";

interface FormFilterProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
export default function FormFilter({ handleSubmit }: FormFilterProps) {
  // state
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const [driver, setDriver] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [capacity, setCapacity] = useState<string>("");

  // handler
  const handleDriver = (driver: string) => {
    setDriver(driver);
    setDisableButton(false);
  };
  const handleDate = (date: string) => {
    setDate(date);
  };
  const handleTime = (time: string) => setTime(time);
  const handleCapacity = (capacity: string) => setCapacity(capacity);

  return (
    <Form
      onSubmit={(e) => handleSubmit(e)}
      className="form-cari rounded form-cari-shadow p-3 mb-3"
    >
      <Row className="align-items-end">
        <Col lg={10}>
          <Row className="align-items-end body-12-light">
            <Col md={6} lg={3}>
              <div className="mb-3 mb-lg-0">
                <FormLabel htmlFor="driver">Tipe Driver</FormLabel>
                <FormSelect
                  required
                  name="driver"
                  id="driver"
                  className="body-12-light"
                  onChange={(e) => handleDriver(e.target.value)}
                  value={driver}
                >
                  <option value="" disabled>
                    Pilih Tipe Driver
                  </option>
                  <option value="true">Dengan Sopir</option>
                  <option value="false">Tanpa Sopir (Lepas Kunci)</option>
                </FormSelect>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="mb-3 mb-lg-0">
                <FormLabel htmlFor="tanggal">Pilih Tanggal</FormLabel>
                <FormControl
                  type="date"
                  name="tanggal"
                  id="tanggal"
                  className="body-12-light"
                  required
                  value={date}
                  onChange={(e) => handleDate(e.target.value)}
                />
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="mb-3 mb-lg-0">
                <FormLabel htmlFor="waktu">Waktu Jemput/Ambil</FormLabel>
                <FormSelect
                  className="body-12-light"
                  id="waktu"
                  name="waktu"
                  required
                  value={time}
                  onChange={(e) => handleTime(e.target.value)}
                >
                  <option value="" disabled>
                    Pilih Waktu
                  </option>
                  <option value="8">08.00 WIB</option>
                  <option value="9">09.00 WIB</option>
                  <option value="10">10.00 WIB</option>
                  <option value="11">11.00 WIB</option>
                  <option value="12">12.00 WIB</option>
                  <option value="13">13.00 WIB</option>
                  <option value="14">14.00 WIB</option>
                  <option value="15">15.00 WIB</option>
                  <option value="16">16.00 WIB</option>
                </FormSelect>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <FormLabel>Jumlah Penumpang (Optional)</FormLabel>
              <div className="d-flex">
                <FormControl
                  placeholder="Jumlah Penumpang"
                  type="input"
                  name="jumlah"
                  className="body-12-light position-relative"
                  onChange={(e) => handleCapacity(e.target.value)}
                  value={capacity}
                />
                <img src={iuser} alt="" className="jumlah-icon" />
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="col-lg-2">
          <Button
            variant="success"
            className="btn-success w-100 body-14-bold"
            type="submit"
            disabled={
              disableButton ||
              Number(capacity) > 6 ||
              (capacity !== "" && !Number(capacity))
            }
          >
            Cari Mobil
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
