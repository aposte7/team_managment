function PopupConfirm({ closeModal, onConfirm }) {
  return (
    <div className="bg-white px-6 pb-4">
      <p className="mb-8 text-start [text-align-last:center]">
        Are you sure want to delete <b>Olman</b> from action member
      </p>

      <div className="flex justify-end gap-5">
        <button
          type="button"
          onClick={closeModal}
          className="rounded-md bg-blue-100 px-3.5 py-2 text-gray-800 transition-all hover:bg-blue-200"
        >
          Cancle
        </button>
        <button
          type="button"
          onClick={() => {
            onConfirm();
            closeModal();
          }}
          className="rounded-md bg-orange-600 px-3.5 py-2 text-white transition-all hover:bg-orange-700"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default PopupConfirm;
