export const getErrorMessage = (err) => {
    return 'Không thành công';
    //return err?.response?.data?.errors[0]?.message || err.message
}

export default getErrorMessage;
