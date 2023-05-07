const PateintModal = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Pateint Data will be comming soon</h3>
                   
                </div>
            </div>
        </div>
    );
};

export default PateintModal;