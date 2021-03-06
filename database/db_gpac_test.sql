PGDMP     
    8                y         	   gpac_test    12.6    12.6 +    H           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            I           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            J           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            K           1262    16393 	   gpac_test    DATABASE     �   CREATE DATABASE gpac_test WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Mexico.1252' LC_CTYPE = 'Spanish_Mexico.1252';
    DROP DATABASE gpac_test;
                postgres    false            �            1259    16452    coach    TABLE     V   CREATE TABLE public.coach (
    id_coach integer NOT NULL,
    id_director integer
);
    DROP TABLE public.coach;
       public         heap    postgres    false            �            1259    16394    director    TABLE     C   CREATE TABLE public.director (
    id_director integer NOT NULL
);
    DROP TABLE public.director;
       public         heap    postgres    false            �            1259    16543    location    TABLE     �   CREATE TABLE public.location (
    id_location integer NOT NULL,
    name text,
    latitude text,
    longitude text,
    zipcode text
);
    DROP TABLE public.location;
       public         heap    postgres    false            �            1259    16517    recruit    TABLE     r  CREATE TABLE public.recruit (
    id_recruit integer NOT NULL,
    id_owner integer,
    first_name text,
    last_name text,
    status text,
    wish_salary text,
    functional_title text,
    title text,
    seniority text,
    industry text,
    id_location integer,
    phone text,
    email text,
    company text,
    status_process text,
    relocation text
);
    DROP TABLE public.recruit;
       public         heap    postgres    false            �            1259    16515    recruit_id_recruit_seq    SEQUENCE     �   CREATE SEQUENCE public.recruit_id_recruit_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.recruit_id_recruit_seq;
       public          postgres    false    209            L           0    0    recruit_id_recruit_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.recruit_id_recruit_seq OWNED BY public.recruit.id_recruit;
          public          postgres    false    208            �            1259    16472 	   recruiter    TABLE     [   CREATE TABLE public.recruiter (
    id_recruiter integer NOT NULL,
    id_coach integer
);
    DROP TABLE public.recruiter;
       public         heap    postgres    false            �            1259    16416    role    TABLE     J   CREATE TABLE public.role (
    id_role integer NOT NULL,
    name text
);
    DROP TABLE public.role;
       public         heap    postgres    false            �            1259    16437    user_account    TABLE     f   CREATE TABLE public.user_account (
    id_user integer NOT NULL,
    email text,
    password text
);
     DROP TABLE public.user_account;
       public         heap    postgres    false            �            1259    16424 	   user_info    TABLE     x   CREATE TABLE public.user_info (
    id_user integer NOT NULL,
    name text,
    last_name text,
    id_role integer
);
    DROP TABLE public.user_info;
       public         heap    postgres    false            �
           2604    16520    recruit id_recruit    DEFAULT     x   ALTER TABLE ONLY public.recruit ALTER COLUMN id_recruit SET DEFAULT nextval('public.recruit_id_recruit_seq'::regclass);
 A   ALTER TABLE public.recruit ALTER COLUMN id_recruit DROP DEFAULT;
       public          postgres    false    209    208    209            A          0    16452    coach 
   TABLE DATA           6   COPY public.coach (id_coach, id_director) FROM stdin;
    public          postgres    false    206   %1       =          0    16394    director 
   TABLE DATA           /   COPY public.director (id_director) FROM stdin;
    public          postgres    false    202   H1       E          0    16543    location 
   TABLE DATA           S   COPY public.location (id_location, name, latitude, longitude, zipcode) FROM stdin;
    public          postgres    false    210   g1       D          0    16517    recruit 
   TABLE DATA           �   COPY public.recruit (id_recruit, id_owner, first_name, last_name, status, wish_salary, functional_title, title, seniority, industry, id_location, phone, email, company, status_process, relocation) FROM stdin;
    public          postgres    false    209   2       B          0    16472 	   recruiter 
   TABLE DATA           ;   COPY public.recruiter (id_recruiter, id_coach) FROM stdin;
    public          postgres    false    207   N5       >          0    16416    role 
   TABLE DATA           -   COPY public.role (id_role, name) FROM stdin;
    public          postgres    false    203   u5       @          0    16437    user_account 
   TABLE DATA           @   COPY public.user_account (id_user, email, password) FROM stdin;
    public          postgres    false    205   �5       ?          0    16424 	   user_info 
   TABLE DATA           F   COPY public.user_info (id_user, name, last_name, id_role) FROM stdin;
    public          postgres    false    204   6       M           0    0    recruit_id_recruit_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.recruit_id_recruit_seq', 45, true);
          public          postgres    false    208            �
           2606    16456    coach Coach_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.coach
    ADD CONSTRAINT "Coach_pkey" PRIMARY KEY (id_coach);
 <   ALTER TABLE ONLY public.coach DROP CONSTRAINT "Coach_pkey";
       public            postgres    false    206            �
           2606    16444    user_account UK_email 
   CONSTRAINT     S   ALTER TABLE ONLY public.user_account
    ADD CONSTRAINT "UK_email" UNIQUE (email);
 A   ALTER TABLE ONLY public.user_account DROP CONSTRAINT "UK_email";
       public            postgres    false    205            �
           2606    16540    recruit UK_recruit_email 
   CONSTRAINT     V   ALTER TABLE ONLY public.recruit
    ADD CONSTRAINT "UK_recruit_email" UNIQUE (email);
 D   ALTER TABLE ONLY public.recruit DROP CONSTRAINT "UK_recruit_email";
       public            postgres    false    209            �
           2606    16401    director director_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.director
    ADD CONSTRAINT director_pkey PRIMARY KEY (id_director);
 @   ALTER TABLE ONLY public.director DROP CONSTRAINT director_pkey;
       public            postgres    false    202            �
           2606    16550    location location_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.location
    ADD CONSTRAINT location_pkey PRIMARY KEY (id_location);
 @   ALTER TABLE ONLY public.location DROP CONSTRAINT location_pkey;
       public            postgres    false    210            �
           2606    16525    recruit recruit_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.recruit
    ADD CONSTRAINT recruit_pkey PRIMARY KEY (id_recruit);
 >   ALTER TABLE ONLY public.recruit DROP CONSTRAINT recruit_pkey;
       public            postgres    false    209            �
           2606    16476    recruiter recruiter_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.recruiter
    ADD CONSTRAINT recruiter_pkey PRIMARY KEY (id_recruiter);
 B   ALTER TABLE ONLY public.recruiter DROP CONSTRAINT recruiter_pkey;
       public            postgres    false    207            �
           2606    16423    role role_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_pkey PRIMARY KEY (id_role);
 8   ALTER TABLE ONLY public.role DROP CONSTRAINT role_pkey;
       public            postgres    false    203            �
           2606    16542    user_account user_account_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.user_account
    ADD CONSTRAINT user_account_pkey PRIMARY KEY (id_user);
 H   ALTER TABLE ONLY public.user_account DROP CONSTRAINT user_account_pkey;
       public            postgres    false    205            �
           2606    16431    user_info user_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.user_info
    ADD CONSTRAINT user_pkey PRIMARY KEY (id_user);
 =   ALTER TABLE ONLY public.user_info DROP CONSTRAINT user_pkey;
       public            postgres    false    204            �
           2606    16432    user_info FK_idRole    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_info
    ADD CONSTRAINT "FK_idRole" FOREIGN KEY (id_role) REFERENCES public.role(id_role) NOT VALID;
 ?   ALTER TABLE ONLY public.user_info DROP CONSTRAINT "FK_idRole";
       public          postgres    false    203    2725    204            �
           2606    16445    user_account FK_idUser    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_account
    ADD CONSTRAINT "FK_idUser" FOREIGN KEY (id_user) REFERENCES public.user_info(id_user);
 B   ALTER TABLE ONLY public.user_account DROP CONSTRAINT "FK_idUser";
       public          postgres    false    205    2727    204            �
           2606    16482    recruiter FK_id_coach    FK CONSTRAINT     }   ALTER TABLE ONLY public.recruiter
    ADD CONSTRAINT "FK_id_coach" FOREIGN KEY (id_coach) REFERENCES public.coach(id_coach);
 A   ALTER TABLE ONLY public.recruiter DROP CONSTRAINT "FK_id_coach";
       public          postgres    false    206    2733    207            �
           2606    16462    coach FK_id_director    FK CONSTRAINT     �   ALTER TABLE ONLY public.coach
    ADD CONSTRAINT "FK_id_director" FOREIGN KEY (id_director) REFERENCES public.director(id_director);
 @   ALTER TABLE ONLY public.coach DROP CONSTRAINT "FK_id_director";
       public          postgres    false    206    2723    202            �
           2606    16559    recruit FK_id_location    FK CONSTRAINT     �   ALTER TABLE ONLY public.recruit
    ADD CONSTRAINT "FK_id_location" FOREIGN KEY (id_location) REFERENCES public.location(id_location) NOT VALID;
 B   ALTER TABLE ONLY public.recruit DROP CONSTRAINT "FK_id_location";
       public          postgres    false    209    2741    210            �
           2606    16526    recruit FK_id_owner_usuario    FK CONSTRAINT     �   ALTER TABLE ONLY public.recruit
    ADD CONSTRAINT "FK_id_owner_usuario" FOREIGN KEY (id_owner) REFERENCES public.user_info(id_user);
 G   ALTER TABLE ONLY public.recruit DROP CONSTRAINT "FK_id_owner_usuario";
       public          postgres    false    204    2727    209            �
           2606    16487    director FK_id_usuario    FK CONSTRAINT     �   ALTER TABLE ONLY public.director
    ADD CONSTRAINT "FK_id_usuario" FOREIGN KEY (id_director) REFERENCES public.user_info(id_user) NOT VALID;
 B   ALTER TABLE ONLY public.director DROP CONSTRAINT "FK_id_usuario";
       public          postgres    false    202    2727    204            �
           2606    16492    coach FK_id_usuario    FK CONSTRAINT     �   ALTER TABLE ONLY public.coach
    ADD CONSTRAINT "FK_id_usuario" FOREIGN KEY (id_coach) REFERENCES public.user_info(id_user) NOT VALID;
 ?   ALTER TABLE ONLY public.coach DROP CONSTRAINT "FK_id_usuario";
       public          postgres    false    2727    206    204            �
           2606    16497    recruiter FK_id_usuario    FK CONSTRAINT     �   ALTER TABLE ONLY public.recruiter
    ADD CONSTRAINT "FK_id_usuario" FOREIGN KEY (id_recruiter) REFERENCES public.user_info(id_user) NOT VALID;
 C   ALTER TABLE ONLY public.recruiter DROP CONSTRAINT "FK_id_usuario";
       public          postgres    false    2727    204    207            A      x�3�4�2�=... ��      =      x�3����� Z �      E   �   x��M
�0@���9@;d&�eq!bՅ[7A�����q�=x�Z�+wz��|��G�D�G�!{�H1���g���&$NF�'C��l$+ZY˪����N���i�1Y�-���P��(��,��]���A�L�!i'֑auA��G�'�      D   *  x���]r�0 ���� �e��0�i~&�楝�,�*��H6�M�ҋuep�vp���(�țoֻ+0�53�D
_Q��X��,��T�D��[�B�n�5�ZR��+�n���Q��Ib2�O����Uq��5�p�n������D�������3�*���ؾ�� ��h�	&�Ɏ��h�	!�/Ʀ��R�TXg�@�(z'`P�|_���A�<�1HFɎ �U8�Xv�Hl)�{��Q6�b˰����!D���H� �>�W������f�*tEWSe���̮����J�_I�j�"�8�9�^ �K1�f(U�9{��M��׺��9�gs���xN?�NS+�L��Z�V$��"�����<�j��B��-�R(ڪ+,��B�!�k�+W۽⓱� ǉ2�kܙc}6���a�3�S�*A]�ź���w�C��5>�>1M����t�}��=�|j�R��A�D4Yw@-2�&��%�s��k/;�6�T��p�,�(��7b�:5K7��-
�E�:���xM�fl%%�ڵ#I}Ȭ�ß�7�
�b(��S-[*b��*`|c��|f�0ƅOO+�����%��,���Y>J�#�I!��N��.���{zAm�)�dV&�U�o�s��߿4<��t<QDԶ�cH�[,��{�d��H23?��) Ma�J�L�I�6���x!���0�ݺ�[�L7��N��l������:S���O�;97
�^�Nff!�v�GWa��Џ������6����*洁���kT25%\�R�	�U;��:��x͏�N��p1�      B      x�3�4�2b3NS�=... �      >   ,   x�3�t�,JM.�/�2�t�OL��2�JM.*�,I-����� Ǿ
G      @   J   x�3�L�,JM.�/rH�K���442615�2�L�OL�@4�*-*�,IESm��0B�1���&j�Po�*���� �)�      ?   N   x�3�t�,JM.�/B0��8���3���1gPjrQifIj˘��3B0��R��
Fpڈ�I�1
ۘ+F��� )�)�     