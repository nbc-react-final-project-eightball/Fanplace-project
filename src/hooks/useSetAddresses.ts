import { auth, db } from '../firebase/config';
import { doc, addDoc, collection, updateDoc } from '@firebase/firestore';
import { useDispatch } from 'react-redux';
import { setAddressInfo } from '../redux/modules/shipping/shippingSlice';
import { useModal } from './useModal';

interface setAddressesResult {
  setAddresses: (
    addressName: string,
    recipient: string,
    address: string,
    detailAddress: string,
    phoneNumber: string,
    // instructions: string,
  ) => Promise<void>;
}

export const useSetAddresses = (): setAddressesResult => {
  const dispatch = useDispatch();
  const { closeModalHandler } = useModal();

  console.log('useSetAddresses 실행');
  const setAddresses = async (
    addressName: string,
    recipient: string,
    address: string,
    detailAddress: string,
    phoneNumber: string,
    // instructions: string,
  ): Promise<void> => {
    try {
      dispatch(
        setAddressInfo({
          addressName,
          recipient,
          address,
          detailAddress,
          phoneNumber,
          //   instructions,
        }),
      );

      const userInfo = auth.currentUser;

      if (userInfo) {
        // userInfo가 null이 아닌 경우에만 진행
        const addressesCollectionRef = collection(db, 'addresses');
        const newDocRef = await addDoc(addressesCollectionRef, {
          addressName,
          recipient,
          address,
          detailAddress,
          phoneNumber,
          //   instructions,
          userId: userInfo.uid, // 사용자 ID 추가
        });
        const newDocId = newDocRef.id;
        await updateDoc(doc(addressesCollectionRef, newDocId), {
          docId: newDocId,
        });

        closeModalHandler(false);
        alert('배송지 추가가 완료되었습니다.');
      } else {
        throw new Error('사용자 정보를 가져올 수 없습니다.');
      }
    } catch (error: any) {
      console.log(error.message);
      console.log('배송지 추가 중 오류가 발생했습니다.', error.message);
      alert('배송지 추가 중 오류가 발생했습니다.');
    }
  };

  // const deleteAddress = async() => {
  //   try{
  //     if(){

  //     }
  //   }
  //   catch(error){

  //   }
  // }

  return { setAddresses };
};
