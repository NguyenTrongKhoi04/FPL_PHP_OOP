<?php

// ? implements là gì
// ? Vì sao lại sai

class UserController
{
    protected $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    public function register($dataUser)
    {
        $user = $this->userService->register($dataUser);
        if($user) {
            echo 'Success';
        } else {
            echo 'Fail';
        }
        
        return;
    }
}
class UserService
{
    protected $userRepository;

    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function register($dataUser)
    {
         return $this->userRepository->store($dataUser);
    }
}
interface UserRepositoryInterface {
    public function store($data);
}


class UserRepository implements UserRepositoryInterface {
    public function store($data)
    {
        return $this->model()->create($data);
    }
}
$userController = new UserController(new UserService(new UserRepository));
$userController->register($data);