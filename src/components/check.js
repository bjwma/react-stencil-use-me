import Form from 'react-bootstrap/Form';

function CheckExample() {
  return (
    <Form>
      {['checkbox', 'radio'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={item}
            label={item}
          />

          <Form.Check
            disabled
            type={type}
            label={`disabled ${type}`}
            id={`disabled-default-${type}`}
          />
        </div>
      ))}
    </Form>
  );
}

export default CheckExample;